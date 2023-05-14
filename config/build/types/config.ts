export enum BuildMode {
    production,
    development
}

export interface BuildEnv {
    mode: keyof typeof BuildMode,
    port: number
}

export interface BuildPaths {
    entry: string,
    build: string,
    html: string,
    src: string
}
export interface BuildOptions {
    port: number;
    mode: keyof typeof BuildMode,
    paths: BuildPaths,
    isDev: boolean
}