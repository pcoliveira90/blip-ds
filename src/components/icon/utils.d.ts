import { Icon } from './icon';
export declare const isSrc: (str: string) => boolean;
export declare const isStr: (val: any) => val is string;
export declare const toLower: (val: string) => string;
export declare const getName: (iconName: string, icon: string) => string;
export declare const getSrc: (src: string) => string;
export declare const getSvgContent: (url: string) => Promise<string>;
export declare const getIconMap: () => Map<string, string>;
export declare const formatSvg: (svgContent: string, color: string) => string;
export declare const addIcons: (icons: {
    [name: string]: string;
}) => void;
export declare const getUrl: (i: Icon) => string;
