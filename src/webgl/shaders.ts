import type { WebGLVariant } from '../config/webgl'

export const vertexShader = /* glsl */ `
  attribute vec2 uv;
  attribute vec2 position;

  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`

const sharedUniforms = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform float uProgress;
  uniform float uIntensity;
  uniform vec2 uResolution;
  uniform vec2 uPointer;

  varying vec2 vUv;
`

const lineFunctions = /* glsl */ `
  float stroke(float value, float width) {
    return 1.0 - smoothstep(width, width + 0.008, abs(value));
  }

  mat2 rotate2d(float angle) {
    float sine = sin(angle);
    float cosine = cos(angle);
    return mat2(cosine, -sine, sine, cosine);
  }

  float sparkle(vec2 point, float size, float phase) {
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    point.x *= aspect;
    point *= rotate2d(sin(phase) * 0.08);
    float pulse = 0.86 + sin(phase) * 0.14;
    vec2 scaled = abs(point) / max(size * pulse, 0.001);
    float vertical = (1.0 - smoothstep(0.025, 0.12, scaled.x)) * (1.0 - smoothstep(0.0, 1.0, scaled.y));
    float horizontal = (1.0 - smoothstep(0.025, 0.12, scaled.y)) * (1.0 - smoothstep(0.0, 1.0, scaled.x));
    float center = 1.0 - smoothstep(0.0, 0.18, length(scaled));
    return clamp(vertical + horizontal + center, 0.0, 1.0);
  }

  float petalOutline(vec2 point, float radius, float width, float phase) {
    float angle = atan(point.y, point.x);
    float petalRadius = radius + 0.026 * sin(angle * 6.0 + phase);
    return stroke(length(point) - petalRadius, width);
  }

  float lineSegment(vec2 point, vec2 startPoint, vec2 endPoint, float width) {
    vec2 delta = endPoint - startPoint;
    float projection = clamp(dot(point - startPoint, delta) / dot(delta, delta), 0.0, 1.0);
    return stroke(length(point - mix(startPoint, endPoint, projection)), width);
  }
`

const heroFragment = /* glsl */ `
  ${sharedUniforms}
  ${lineFunctions}

  void main() {
    vec2 uv = vUv;
    vec2 pointerOffset = vec2(uPointer.x - 0.5, uPointer.y - 0.5) * 0.018;
    float starOne = sparkle(uv - vec2(0.055, 0.39) - pointerOffset, 0.085, uTime * 0.9);
    float starTwo = sparkle(uv - vec2(0.12, 0.34) + pointerOffset, 0.035, uTime * 1.15 + 1.8);
    float starThree = sparkle(uv - vec2(0.86, 0.73) + pointerOffset, 0.08, uTime * 0.78 + 3.2);
    float starFour = sparkle(uv - vec2(0.92, 0.68) - pointerOffset, 0.032, uTime * 1.05 + 0.7);
    float alpha = (starOne * 0.9 + starTwo * 0.58 + starThree * 0.78 + starFour * 0.52) * uIntensity;
    vec3 color = mix(vec3(0.98, 0.97, 0.65), vec3(1.0), clamp(starOne + starThree, 0.0, 1.0));

    gl_FragColor = vec4(color, alpha);
  }
`

const aboutFragment = /* glsl */ `
  ${sharedUniforms}
  ${lineFunctions}

  void main() {
    vec2 uv = vUv;
    vec2 center = uv - vec2(0.84, 0.62);
    float flower = petalOutline(center, 0.14, 0.0042, uTime * 0.3);
    float stem = lineSegment(center, vec2(0.0, 0.12), vec2(0.0, 0.34), 0.0032);
    float leaf = lineSegment(center, vec2(0.0, 0.23), vec2(-0.1, 0.15), 0.0028) + lineSegment(center, vec2(0.0, 0.24), vec2(0.1, 0.16), 0.0028);
    float starOne = sparkle(uv - vec2(0.1, 0.5), 0.055, uTime * 0.75);
    float starTwo = sparkle(uv - vec2(0.9, 0.5), 0.045, uTime * 1.05 + 2.2);

    vec3 color = mix(vec3(0.98, 0.97, 0.65), vec3(1.0), clamp(starOne + starTwo, 0.0, 1.0));
    float alpha = (flower * 0.8 + stem * 0.62 + leaf * 0.48 + starOne * 0.72 + starTwo * 0.62) * uIntensity;

    gl_FragColor = vec4(color, alpha);
  }
`

const ctaFragment = /* glsl */ `
  ${sharedUniforms}
  ${lineFunctions}

  void main() {
    vec2 uv = vUv;
    float starOne = sparkle(uv - vec2(0.09, 0.72), 0.12, uTime * 0.8);
    float starTwo = sparkle(uv - vec2(0.16, 0.63), 0.05, uTime * 1.1 + 1.3);
    float starThree = sparkle(uv - vec2(0.88, 0.34), 0.115, uTime * 0.72 + 2.8);
    float starFour = sparkle(uv - vec2(0.94, 0.43), 0.046, uTime * 1.18 + 0.4);
    float alpha = (starOne * 0.9 + starTwo * 0.58 + starThree * 0.78 + starFour * 0.52) * 1.25;
    alpha *= uIntensity * (0.78 + uProgress * 0.08);
    vec3 color = vec3(1.0);

    gl_FragColor = vec4(color, alpha);
  }
`

export const fragmentShaders: Record<WebGLVariant, string> = {
  hero: heroFragment,
  about: aboutFragment,
  cta: ctaFragment,
}
