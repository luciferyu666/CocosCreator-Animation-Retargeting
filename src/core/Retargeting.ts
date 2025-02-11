import { SkeletonMapper } from "./SkeletonMapper";
import { quat, vec3 } from "cc"; // Cocos Creator 數學模組

export class AnimationRetargeting {
  constructor(private mapper: SkeletonMapper) {}

  retargetAnimation(sourceAnimation: any, targetSkeleton: any) {
    const transformedKeyframes = [];

    sourceAnimation.keyframes.forEach((frame: any) => {
      const newFrame = {};
      for (const bone in frame.transforms) {
        const targetBone = this.mapper.getMappedBone(bone);
        if (targetBone) {
          const transform = frame.transforms[bone];
          newFrame[targetBone] = this.convertTransform(transform);
        }
      }
      transformedKeyframes.push(newFrame);
    });

    return transformedKeyframes;
  }

  private convertTransform(transform: any) {
    // 這裡可以加入 Quaternion、Scale 等變換邏輯
    const rotation = quat.clone(transform.rotation);
    const position = vec3.clone(transform.position);
    return { rotation, position };
  }
}
