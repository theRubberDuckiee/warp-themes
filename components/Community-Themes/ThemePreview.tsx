import { useEffect, useState } from "react";
import SimplifiedBlock from "./SimplifiedBlock";
import SimplifiedNavBar from "./SimplifiedNavBar";
import SimplifiedPrompt from "./SimplifiedPrompt";
import { ThemeData } from "interface";

interface Props {
    theme: ThemeData
}

export default function ThemePreview({theme}) {
    return (
        <div className="w-full relative" style={{ width: '800px', height: '540px'}}>
            <div
                className="absolute top-0 left-0 right-0 bottom-0 min-w-full select-none rounded-md leading-5 drop-shadow-lg lg:max-w-3xl"
                style={{
                    backgroundColor: theme.content.background,
                    color: theme.content.foreground,
                }}
            >
                <SimplifiedNavBar theme={theme} />
                <SimplifiedBlock theme={theme} />
                <SimplifiedPrompt theme={theme} />
            </div>
        </div>
    );
}

