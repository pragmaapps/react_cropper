import React from 'react';
import Cropper from 'cropperjs';

interface ReactCropperElement extends HTMLCanvasElement {
    cropper: Cropper;
}
interface ReactCropperDefaultOptions {
    scaleX?: number;
    scaleY?: number;
    enable?: boolean;
    zoomTo?: number;
    rotateTo?: number;
}
interface ReactCropperProps extends ReactCropperDefaultOptions, Cropper.Options<HTMLCanvasElement>, Omit<React.HTMLProps<HTMLCanvasElement>, 'data' | 'ref' | 'crossOrigin'> {
    crossOrigin?: '' | 'anonymous' | 'use-credentials' | undefined;
    on?: (eventName: string, callback: () => void | Promise<void>) => void | Promise<void>;
    onInitialized?: (instance: Cropper) => void | Promise<void>;
}
declare const ReactCropper: React.ForwardRefExoticComponent<ReactCropperProps & React.RefAttributes<ReactCropperElement | HTMLCanvasElement>>;

export { ReactCropper as Cropper, ReactCropperElement, ReactCropperProps, ReactCropper as default };
