export interface Config {
    nest: NestConfig;
    cors: CorsConfig;
    swagger: SwaggerConfig;
    security: SecurityConfig;
}

export interface NestConfig {
    port: number;
}

export interface CorsConfig {
    enabled: boolean;
    enabledFor: string[];
}

export interface SwaggerConfig {
    enabled: boolean;
    title: string;
    description: string;
    version: string;
    path: string;
}

export interface SecurityConfig {
    expiresIn: string;
    refreshIn: string;
    bcryptSaltOrRound: string | number;
}

const config: Config = {
    nest: {
        port: 3333,
    },
    cors: {
        enabled: true,
        enabledFor: []
    },
    swagger: {
        enabled: true,
        title: 'KuraKaani FTW',
        description: "The KuraKaani API for mini meetup game + chat hangout clients",
        version: '1.5',
        path: 'api',
    },
    security: {
        expiresIn: '10m',
        refreshIn: '7d',
        bcryptSaltOrRound: 10,
    },
};

export default (): Config => config;