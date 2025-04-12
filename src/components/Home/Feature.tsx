import React from "react";

import CodeBlock from "@theme/CodeBlock";

export type Feature = {
    title: string;
    tagline?: string;
    description?: string;
    annotaion?: string;
    children?: React.ReactNode;
};

export function HomeFeature({
                                title,
                                tagline,
                                description,
                                annotaion,
                                children,
                            }: Feature): React.ReactNode {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <p className="text-sm text-base-content/70 font-medium tracking-wide uppercase">
                {tagline}
            </p>
            <h1 className="mt-3 font-mono font-light text-4xl tracking-tight sm:text-5xl md:text-5xl text-primary">
                {title}
            </h1>
            <p className="mt-10 mb-6">{description}</p>
            {children}
            <p className="text-sm italic text-base-content/70">{annotaion}</p>
        </div>
    );
}

function HomeFeatureSingleColumn(props: Feature): React.ReactNode {
    return (
        <div className="grid grid-cols-1 px-4 py-8 md:px-16 mx-auto">
            <HomeFeature {...props} />
        </div>
    );
}

function HomeFeatureDoubleColumn({
                                     features: [feature1, feature2],
                                     children,
                                 }: {
    features: [Feature, Feature];
    children?: [React.ReactNode, React.ReactNode];
}): React.ReactNode {
    const [children1, children2] = children ?? [];

    return (
        <div className="grid gap-x-6 gap-y-8 grid-cols-1 lg:grid-cols-2 max-w-7xl px-4 py-8 md:px-16 mx-auto">
            <HomeFeature {...feature1}>{children1}</HomeFeature>
            <HomeFeature {...feature2}>{children2}</HomeFeature>
        </div>
    );
}

function HomeFeatures(): React.ReactNode {
    return (
        <>
            <HomeFeatureSingleColumn
                title="开箱即用"
                tagline="out of box"
                description="简单便捷，开箱即用"
            />
            <HomeFeatureDoubleColumn
                features={[
                    {
                        title: "简洁美观",
                        tagline: "clean and beautiful",
                        description: "支持多语言、多主题界面",
                    },
                    {
                        title: "深度集成",
                        tagline: "deep integration",
                        description: "支持搜索、添加在线 mod.io Mod",
                    },
                ]}
            />
            <HomeFeatureDoubleColumn
                features={[
                    {
                        title: "跨平台技术开发",
                        tagline: "cross-platform support",
                        description: "React + Typescript + Vite + AntDesign + Rust + Tauri",
                    },
                    {
                        title: "插件系统",
                        tagline: "plugin system",
                        description: "支持 UE4SS C++ 插件",
                    }
                ]}
            />
        </>
    );
}

export default React.memo(HomeFeatures);
