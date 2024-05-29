import { StaticImageData } from 'next/image';
// * Interface
export interface IImage {
    src: string | StaticImageData;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
    quality?: number;
    blurDataURL?: string;
    unoptimized?: boolean;
}