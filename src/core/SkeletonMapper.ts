export class SkeletonMapper {
  private mapping: Map<string, string> = new Map();

  constructor(sourceSkeleton: any, targetSkeleton: any) {
    this.generateMapping(sourceSkeleton, targetSkeleton);
  }

  private generateMapping(source: any, target: any) {
    // 根據名稱或其他特徵自動匹配骨骼
    source.bones.forEach((bone: any) => {
      const targetBone = target.bones.find((b: any) => b.name === bone.name);
      if (targetBone) {
        this.mapping.set(bone.name, targetBone.name);
      }
    });
  }

  getMappedBone(sourceBoneName: string): string | undefined {
    return this.mapping.get(sourceBoneName);
  }
}
