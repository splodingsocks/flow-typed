

declare module 'pixi-spine' {
					
}

declare module 'spine' {
		declare export interface Timeline {
		frames: number[],
		getFrameCount(): number,
		apply(
		skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number
	): void
	}

	declare export interface Attachment {
		name: string,
		type: number
	}

		declare export class Animation  {
		constructor(name: string, timelines?: Timeline[], duration?: number): this;
		apply(
		skeleton: Skeleton, lastTime: number, time: number, loop?: boolean, events?: Event[]
	): void;
		mix(
		skeleton: Skeleton, lastTime: number, time: number, loop?: boolean, events?: any[], alpha?: number
	): void;
		binarySearch(values: number[], target: number, step: number): number;
		binarySearch1(values: number[], target: number): number;
		linearSearch(values: number[], target: number, step: number): number;
		name: string;
		timelines: Timeline[];
		duration: number
	}

	declare export class AnimationState  {
		data: AnimationStateData;
		tracks: TrackEntry[];
		events: Event[];
		onStart: (index: number) => void;
		onEnd: (trackIndex: number) => void;
		onComplete: (i: number, count: number) => void;
		onEvent: (i: number, event: Event) => void;
		timeScale: number;
		constructor(stateData: AnimationStateData): this;
		update(delta: number): void;
		apply(skeleton: Skeleton): void;
		clearTracks(): void;
		clearTrack(trackIndex: number): void;
		setCurrent(index: number, entry: TrackEntry): void;
		setAnimationByName(trackIndex: number, animationName: string, loop: boolean): TrackEntry;
		setAnimation(trackIndex: number, animation: Animation, loop: boolean): TrackEntry;
		addAnimationByName(
		trackIndex: number, animationName: string, loop: boolean, delay: number
	): TrackEntry;
		addAnimation(
		trackIndex: number, animation: Animation, loop: boolean, delay: number
	): TrackEntry;
		getCurrent(trackIndex: number): TrackEntry
	}

	declare export class Spine extends PIXI$Container {
		constructor(spineData: any): this;
		fromAtlas(resourceName: string): Spine;
		update(dt: number): void;
		spineData: any;
		skeleton: Skeleton;
		stateData: AnimationStateData;
		state: AnimationState;
		slotContainers: PIXI.Container[];
		autoUpdate: boolean
	}

	declare export class AnimationStateData  {
		constructor(skeletonData: SkeletonData): this;
		defaultMix: number;
		skeletonData: SkeletonData;
		setMixByName(fromName: string, toName: string, duration: number): void;
		setMix(from: Animation, to: Animation, duration: number): void;
		getMix(from: Animation, to: Animation): number
	}

	declare export class AttachmentType  {
		region: number;
		boundingbox: number;
		mesh: number;
		skinnedmesh: number
	}

	declare export class Bone  {
		data: BoneData;
		skeleton: Skeleton;
		parent: Bone;
		constructor(boneData: BoneData, skeleton: Skeleton, parent: Bone): this;
		x: number;
		y: number;
		rotation: number;
		rotationIK: number;
		scaleX: number;
		scaleY: number;
		flipX: boolean;
		flipY: boolean;
		m00: number;
		m01: number;
		worldX: number;
		m10: number;
		m11: number;
		worldY: number;
		worldRotation: number;
		NO PRINT IMPLEMENTED: SemicolonClassElement;
		worldScaleX: number;
		worldScaleY: number;
		worldFlipX: boolean;
		worldFlipY: boolean;
		updateWorldTransform(): void;
		setToSetupPose(): void;
		worldToLocal(world: number[]): void;
		localToWorld(local: number[]): void
	}

	declare export class BoneData  {
		name: string;
		parent: Bone;
		constructor(name: string, parent: Bone): this;
		length: number;
		x: number;
		y: number;
		rotation: number;
		scaleX: number;
		scaleY: number;
		inheritScale: boolean;
		inheritRotation: boolean;
		flipX: boolean;
		flipY: boolean
	}

	declare export class BoundingBoxAttachment extends Attachment {
		constructor(name: string): this;
		name: string;
		vertices: number[];
		type: number;
		computeWorldVertices(x: number, y: number, bone: Bone, worldVertices: number[]): void
	}

	declare export class ColorTimeline extends Timeline {
		constructor(frameCount: number): this;
		curves: Curves;
		frames: number[];
		slotIndex: number;
		getFrameCount(): number;
		setFrame(
		frameIndex: number, time: number, r: number, g: number, b: number, a: number
	): void;
		apply(
		skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number
	): void
	}

	declare export class Curves  {
		constructor(frameCount: number[]): this;
		curves: number[];
		setLinear(frameIndex: number): void;
		setStepped(frameIndex: number): void;
		setCurve(frameIndex: number, cx1: number, cy1: number, cx2: number, cy2: number): void;
		getCurvePercent(frameIndex: number, percent: number): number
	}

	declare export class DrawOrderTimeline extends Timeline {
		constructor(frameCount: number): this;
		frames: number[];
		drawOrders: number[];
		getFrameCount(): number;
		setFrame(frameIndex: number, time: number, drawOrder: number[]): void;
		apply(
		skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number
	): void
	}

	declare export class Event  {
		constructor(data: any): this;
		data: any;
		intValue: number;
		floatValue: number;
		stringValue: string
	}

	declare export class EventData  {
		constructor(name: string): this;
		name: string;
		intValue: number;
		floatValue: number;
		stringValue: string
	}

	declare export class EventTimeline extends Timeline {
		constructor(frameCount: number): this;
		frames: number[];
		events: Event[];
		getFrameCount(): number;
		setFrame(frameIndex: number, time: number, event: Event): void;
		apply(
		skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number
	): void
	}

	declare export class FfdTimeline extends Timeline {
		constructor(frameCount: number): this;
		curves: Curves;
		frames: number[];
		frameVertices: number[];
		slotIndex: number;
		attachment: number;
		getFrameCount(): number;
		setFrame(frameIndex: number, time: number, vertices: number[]): void;
		apply(
		skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number
	): void
	}

	declare export class FlipXTimeline extends Timeline {
		constructor(frameCount: number): this;
		curves: Curves;
		frames: number[];
		boneIndex: number;
		getFrameCount(): number;
		setFrame(frameIndex: number, time: number, vertices: number[]): void;
		apply(
		skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number
	): void
	}

	declare export class FlipYTimeline extends Timeline {
		constructor(frameCount: number): this;
		curves: Curves;
		frames: number[];
		boneIndex: number;
		getFrameCount(): number;
		setFrame(frameIndex: number, time: number, vertices: number[]): void;
		apply(
		skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number
	): void
	}

	declare export class IkConstraint  {
		constructor(data: IkConstraintData, skeleton: Skeleton): this;
		data: IkConstraintData;
		mix: number;
		bendDirection: number;
		bones: Bone[];
		target: Bone;
		apply(): void;
		apply1(bone: Bone, targetX: number, targetY: number, alpha: number): void;
		apply2(
		parent: Bone, child: Bone, targetX: number, targetY: number, bendDirection: number, alpha: number
	): void
	}

	declare export class IkConstraintData  {
		constructor(name: string): this;
		name: string;
		bones: Bone[];
		target: Bone;
		bendDirection: number;
		mix: number
	}

	declare export class IkConstraintTimeline extends Timeline {
		constructor(frameCount: number): this;
		curves: Curves;
		frames: number[];
		ikConstraintIndex: number;
		getFrameCount(): number;
		setFrame(frameIndex: number, time: number, mix: number, bendDirection: number): void;
		apply(
		skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number
	): void
	}

	declare export class MeshAttachment extends Attachment {
		constructor(name: string): this;
		name: string;
		type: number;
		vertices: number[];
		uvs: number[];
		regionUVs: number[];
		triangles: number[];
		hullLength: number;
		r: number;
		g: number;
		b: number;
		a: number;
		path: string;
		rendererObject: any;
		regionU: number;
		regionV: number;
		regionU2: number;
		regionV2: number;
		regionRotate: boolean;
		regionOffsetX: number;
		regionOffsetY: number;
		regionWidth: number;
		regionHeight: number;
		regionOriginalWidth: number;
		regionOriginalHeight: number;
		edges: number[];
		width: number;
		height: number;
		updateUVs(): void;
		computeWorldVertices(x: number, y: number, slot: Slot, worldVertices: number[]): void
	}

	declare export class RegionAttachment extends Attachment {
		constructor(name: string): this;
		name: string;
		offset: number[];
		uvs: number[];
		type: number;
		x: number;
		y: number;
		rotation: number;
		scaleX: number;
		scaleY: number;
		width: number;
		height: number;
		r: number;
		g: number;
		b: number;
		a: number;
		path: string;
		rendererObject: any;
		regionOffsetX: number;
		regionOffsetY: number;
		regionWidth: number;
		regionHeight: number;
		regionOriginalWidth: number;
		regionOriginalHeight: number;
		updateOffset(): void;
		setUVs(u: number, v: number, u2: number, v2: number, rotate: number): void;
		computeVertices(x: number, y: number, bone: Bone, vertices: number[]): void
	}

	declare export class RotateTimeline extends Timeline {
		constructor(frameCount: number): this;
		curves: Curves;
		frames: number[];
		boneIndex: number;
		getFrameCount(): number;
		setFrame(frameIndex: number, time: number, mix: number, bendDirection: number): void;
		apply(
		skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number
	): void
	}

	declare export class ScaleTimeline extends Timeline {
		constructor(frameCount: number): this;
		curves: Curves;
		frames: number[];
		boneIndex: number;
		getFrameCount(): number;
		setFrame(frameIndex: number, time: number, mix: number, bendDirection: number): void;
		apply(
		skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number
	): void
	}

	declare export class Skeleton  {
		constructor(skeletonData: SkeletonData): this;
		data: SkeletonData;
		bones: Bone[];
		slots: Slot[];
		drawOrder: Slot[];
		ikConstraints: IkConstraint[];
		boneCache: Bone[][];
		x: number;
		y: number;
		skin: Skin;
		r: number;
		g: number;
		b: number;
		a: number;
		time: number;
		flipX: boolean;
		flipY: boolean;
		updateCache(): void;
		updateWorldTransform(): void;
		setToSetupPose(): void;
		setBonesToSetupPose(): void;
		setSlotsToSetupPose(): void;
		getRootBone(): Bone;
		findBone(boneName: string): Bone;
		findBoneIndex(boneName: string): number;
		findSlot(slotName: string): Slot;
		findSlotIndex(slotName: string): number;
		setSkinByName(skinName: string): Skin;
		setSkin(newSkin: Skin): void;
		getAttachmentBySlotName(slotName: string, attachmentName: string): Attachment;
		getAttachmentBySlotIndex(slotIndex: number, attachmentName: string): Attachment;
		setAttachment(slotName: string, attachmentName: string): void;
		findIkConstraint(ikConstraintName: string): IkConstraint;
		update(delta: number): void;
		resetDrawOrder(): void
	}

	declare export class SkeletonBounds  {
		polygonPool: Polygon[];
		polygons: Polygon[];
		boundingBoxes: BoundingBoxAttachment[];
		minX: number;
		minY: number;
		maxX: number;
		maxY: number;
		update(skeleton: Skeleton, updateAabb: boolean): void;
		aabbCompute(): void;
		aabbContainsPoint(x: number, y: number): void;
		aabbIntersectsSegment(x1: number, y1: number, x2: number, y2: number): boolean;
		aabbIntersectsSkeleton(bounds: SkeletonBounds): boolean;
		containsPoint(x: number, y: number): BoundingBoxAttachment;
		intersectsSegment(x1: number, y1: number, x2: number, y2: number): BoundingBoxAttachment;
		polygonContainsPoint(polygon: Polygon, x: number, y: number): boolean;
		polygonIntersectsSegment(polygon: Polygon, x1: number, y1: number, x2: number, y2: number): boolean;
		getPolygon(attachment: Attachment): Polygon;
		getWidth(): number;
		getHeight(): number
	}

	declare export class SkeletonData  {
		bones: Bone[];
		slots: Slot[];
		skins: Skin[];
		events: Event[];
		animations: Animation[];
		ikConstraints: IkConstraint[];
		name: string;
		defaultSkin: Skin;
		width: number;
		height: number;
		version: any;
		hash: any;
		findBone(boneName: string): Bone;
		findBoneIndex(boneName: string): number;
		findSlot(slotName: string): Slot;
		findSlotIndex(slotName: string): number;
		findSkin(skinName: string): Skin;
		findEvent(eventName: string): Event;
		findAnimation(animationName: string): Animation;
		findIkConstraint(ikConstraintName: string): IkConstraint
	}

	declare export class SkeletonJsonParser  {
		constructor(attachmentLoader: any): this;
		attachmentLoader: any;
		scale: number;
		readSkeletonData(root: Bone, name: string): void;
		readAttachment(skin: Skin, name: string, map: any): void;
		readAnimation(name: string, map: any, skeletonData: SkeletonData): void;
		readCurve(timeline: Timeline, frameIndex: number, valueMap: any): void;
		toColor(hexString: string, colorIndex: string): number;
		getFloatArray(map: any, name: string, scale: number): number[];
		getIntArray(map: any, name: string): number[]
	}

	declare export class Skin  {
		constructor(name: string): this;
		name: string;
		attachments: Attachment[];
		addAttachment(slotIndex: number, name: string, attachment: Attachment): void;
		getAttachment(slotIndex: number, name: string): Attachment;
		_attachAll(skeleton: Skeleton, oldSkin: Skin): void
	}

	declare export class SkinnedMeshAttachment extends Attachment {
		constructor(name: string): this;
		name: string;
		type: number;
		bones: number[];
		weights: number[];
		uvs: number[];
		regionUVs: number[];
		triangles: number[];
		hullLength: number;
		r: number;
		g: number;
		b: number;
		a: number;
		path: string;
		rendererObject: any;
		regionU: number;
		regionV: number;
		regionU2: number;
		regionV2: number;
		regionRotate: boolean;
		regionOffsetX: number;
		regionOffsetY: number;
		regionWidth: number;
		regionHeight: number;
		regionOriginalWidth: number;
		regionOriginalHeight: number;
		edges: number[];
		width: number;
		height: number;
		updateUVs(u: number, v: number, u2: number, v2: number, rotate: boolean): void;
		computeWorldVertices(x: number, y: number, slot: Slot, worldVertices: number[]): void
	}

	declare export class Slot  {
		constructor(slotData: SlotData, bone: Bone): this;
		data: SlotData;
		bone: Bone;
		r: number;
		g: number;
		b: number;
		a: number;
		_attachmentTime: number;
		attachment: Attachment;
		attachmentVertices: number[];
		setAttachment(attachment: Attachment): void;
		setAttachmentTime(time: number): void;
		getAttachmentTime(): number;
		setToSetupPose(): void
	}

	declare export class SlotData  {
		constructor(name: string, boneData: BoneData): this;
		name: string;
		boneData: BoneData;
		PIXI_BLEND_MODE_MAP: {
		multiply: number,
		screen: number,
		additive: number,
		normal: number
	};
		r: number;
		g: number;
		b: number;
		a: number;
		attachmentName: string;
		blendMode: number
	}

	declare export class TrackEntry  {
		next: TrackEntry;
		previous: TrackEntry;
		animation: Animation;
		loop: boolean;
		delay: number;
		time: number;
		lastTime: number;
		endTime: number;
		timeScale: number;
		mixTime: number;
		mixDuration: number;
		mix: number;
		onStart: (index: number) => void;
		onEnd: (trackIndex: number) => void;
		onComplete: (i: number, count: number) => void;
		onEvent: (i: number, event: Event) => void
	}

	declare export class TranslateTimeline extends Timeline {
		constructor(frameCount: number): this;
		curves: Curves[];
		frames: number[];
		boneIndex: number;
		getFrameCount(): number;
		setFrame(frameIndex: number, time: number, x: number, y: number): void;
		apply(
		skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number
	): void
	}

	declare export class Atlas  {
		constructor(atlasText: string, baseUrl: string, crossOrigin: any): this;
		pages: AtlasPage[];
		regions: AtlasRegion[];
		texturesLoading: number;
		findRegion(name: string): AtlasRegion;
		dispose(): void;
		updateUVs(page: AtlasPage): void;
		Format: {
		alpha: number,
		intensity: number,
		luminanceAlpha: number,
		rgb565: number,
		rgba4444: number,
		rgb888: number,
		rgba8888: number
	};
		TextureFilter: {
		nearest: number,
		linear: number,
		mipMap: number,
		mipMapNearestNearest: number,
		mipMapLinearNearest: number,
		mipMapNearestLinear: number,
		mipMapLinearLinear: number
	};
		TextureWrap: {
		mirroredRepeat: number,
		clampToEdge: number,
		repeat: number
	}
	}

	declare export class AtlasAttachmentParser  {
		constructor(atlas: Atlas): this;
		newRegionAttachment(skin: Skin, name: string, path: string): RegionAttachment;
		newMeshAttachment(skin: Skin, name: string, path: string): SkinnedMeshAttachment;
		newSkinnedMeshAttachment(skin: Skin, name: string, path: string): SkinnedMeshAttachment;
		newBoundingBoxAttachment(skin: Skin, name: string): BoundingBoxAttachment
	}

	declare export class AtlasPage  {
		name: string;
		format: any;
		minFilter: any;
		magFilter: any;
		uWrap: any;
		vWrap: any;
		rendererObject: any;
		width: number;
		height: number
	}

	declare export class AtlasReader  {
		constructor(text: string): this;
		lines: string[];
		index: number;
		trim(value: string): string;
		readLine(): string;
		readValue(): string;
		readTuple(tuple: number): number
	}

	declare export class AtlasRegion  {
		page: AtlasPage;
		name: string;
		x: number;
		y: number;
		width: number;
		height: number;
		u: number;
		v: number;
		u2: number;
		v2: number;
		offsetX: number;
		offsetY: number;
		originalWidth: number;
		originalHeight: number;
		index: number;
		rotate: boolean;
		splits: any;
		pads: any
	}

	declare export class AttachmentTimeline extends Timeline {
		constructor(frameCount: number): this;
		slotIndex: number;
		frames: number[];
		attachmentNames: string[];
		getFrameCount(): number;
		setFrame(frameIndex: number, time: number, attachmentName: string): void;
		apply(
		skeleton: Skeleton, lastTime: number, time: number, firedEvents: Event[], alpha: number
	): void
	}

	declare export class atlasParser  {
		constructor(resource: any, next: any): this;
		AnimCache: any;
		enableCaching: boolean
	}

	
}