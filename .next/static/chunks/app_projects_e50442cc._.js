(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_projects_e50442cc._.js", {

"[project]/app/projects/constants.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "projects": (()=>projects)
});
const projects = [
    {
        title: 'MentorLab',
        src: 'planner-app.webp',
        color: '#dbeafe',
        url: 'https://app.aphex.co/',
        role: 'Fullstack Developer'
    },
    {
        title: 'TaskNest',
        src: 'field-app.webp',
        color: '#ddd6fe',
        url: 'https://app.aphex.co/',
        role: 'Fullstack Developer'
    },
    {
        title: 'Compliant Labs',
        src: 'topo.webp',
        color: '#dbeafe',
        url: 'https://compliantlabs.ai/',
        role: 'Fullstack Developer'
    },
    {
        title: 'Compiler Tech',
        src: 'publication-app.webp',
        color: '#fae8ff',
        url: 'https://compilertech.org/',
        role: 'Frontend Developer'
    },
    {
        title: 'Global Konnect',
        src: 'spoken.webp',
        color: '#fee2e2',
        url: 'https://globalkonnect.co/',
        role: 'Frontend Developer'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/projects/project-item.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProjectItem)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ProjectItem({ index, title, url, role, setModal }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: url,
        target: "_blank",
        onMouseEnter: ()=>{
            setModal({
                active: true,
                index
            });
        },
        onMouseLeave: ()=>{
            setModal({
                active: false,
                index
            });
        },
        className: "group flex w-full items-center justify-between border-b px-4 py-10 sm:px-10 sm:py-16",
        rel: "noreferrer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl transition-all group-hover:-translate-x-3 group-hover:scale-110 sm:text-6xl",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/projects/project-item.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-light transition-all group-hover:translate-x-3 group-hover:scale-110 sm:text-lg",
                children: role
            }, void 0, false, {
                fileName: "[project]/app/projects/project-item.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/projects/project-item.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = ProjectItem;
var _c;
__turbopack_context__.k.register(_c, "ProjectItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/projects/project-preview.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProjectPreview)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const scaleAnimation = {
    initial: {
        scale: 0,
        x: '-50%',
        y: '-50%'
    },
    enter: {
        scale: 1,
        x: '-50%',
        y: '-50%',
        transition: {
            duration: 0.4,
            ease: [
                0.76,
                0,
                0.24,
                1
            ]
        }
    },
    closed: {
        scale: 0,
        x: '-50%',
        y: '-50%',
        transition: {
            duration: 0.4,
            ease: [
                0.32,
                0,
                0.67,
                0
            ]
        }
    }
};
function ProjectPreview({ modal, projects }) {
    _s();
    const { active, index } = modal;
    const modalContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cursorLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectPreview.useEffect": ()=>{
            if (window !== undefined) {
                // Move Container
                const xMoveContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickTo(modalContainer.current, 'left', {
                    duration: 0.8,
                    ease: 'power3'
                });
                const yMoveContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickTo(modalContainer.current, 'top', {
                    duration: 0.8,
                    ease: 'power3'
                });
                // Move cursor
                const xMoveCursor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickTo(cursor.current, 'left', {
                    duration: 0.5,
                    ease: 'power3'
                });
                const yMoveCursor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickTo(cursor.current, 'top', {
                    duration: 0.5,
                    ease: 'power3'
                });
                // Move cursor label
                const xMoveCursorLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickTo(cursorLabel.current, 'left', {
                    duration: 0.45,
                    ease: 'power3'
                });
                const yMoveCursorLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].quickTo(cursorLabel.current, 'top', {
                    duration: 0.45,
                    ease: 'power3'
                });
                window.addEventListener('mousemove', {
                    "ProjectPreview.useEffect": (e)=>{
                        const { pageX, pageY } = e;
                        xMoveContainer(pageX);
                        yMoveContainer(pageY);
                        xMoveCursor(pageX);
                        yMoveCursor(pageY);
                        xMoveCursorLabel(pageX);
                        yMoveCursorLabel(pageY);
                    }
                }["ProjectPreview.useEffect"]);
            }
        }
    }["ProjectPreview.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "pointer-events-none absolute flex h-[350px] w-[400px] items-center justify-center overflow-hidden bg-white",
                ref: modalContainer,
                variants: scaleAnimation,
                initial: "initial",
                animate: active ? 'enter' : 'closed',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute h-full w-full",
                    style: {
                        top: index * -100 + '%',
                        transition: 'top 0.6s cubic-bezier(0.76, 0, 0.24, 1)'
                    },
                    children: projects.map((project, index)=>{
                        const { src, color } = project;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-full w-full items-center justify-center",
                            style: {
                                backgroundColor: color
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "h-auto",
                                src: `/static/images/project/${src}`,
                                width: 300,
                                height: 300,
                                alt: "image"
                            }, void 0, false, {
                                fileName: "[project]/app/projects/project-preview.tsx",
                                lineNumber: 104,
                                columnNumber: 17
                            }, this)
                        }, `modal_${index}`, false, {
                            fileName: "[project]/app/projects/project-preview.tsx",
                            lineNumber: 99,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/projects/project-preview.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/projects/project-preview.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "font-base pointer-events-none absolute z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 font-light text-white",
                ref: cursor,
                variants: scaleAnimation,
                initial: "initial",
                animate: active ? 'enter' : 'closed'
            }, void 0, false, {
                fileName: "[project]/app/projects/project-preview.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "font-base pointer-events-none absolute z-10 flex h-16 w-16 items-center justify-center rounded-full bg-transparent font-light text-white",
                ref: cursorLabel,
                variants: scaleAnimation,
                initial: "initial",
                animate: active ? 'enter' : 'closed',
                children: "View"
            }, void 0, false, {
                fileName: "[project]/app/projects/project-preview.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ProjectPreview, "AAQqDMgwxy89EWLhHjpXiH2U0rI=");
_c = ProjectPreview;
var _c;
__turbopack_context__.k.register(_c, "ProjectPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/projects/projects.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Projects)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$breakpoint$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/use-breakpoint/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$breakpoint$2f$dist$2f$esm$2f$useBreakpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/use-breakpoint/dist/esm/useBreakpoint.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$projects$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/projects/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$projects$2f$project$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/projects/project-item.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$projects$2f$project$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/projects/project-preview.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const BREAKPOINTS = {
    mobile: 0,
    tablet: 768,
    desktop: 1280
};
function Projects() {
    _s();
    const { breakpoint } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$breakpoint$2f$dist$2f$esm$2f$useBreakpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(BREAKPOINTS);
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        active: false,
        index: 0
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$projects$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2f$dist$2f$es$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scale: 0.8,
                        opacity: 0,
                        filter: 'blur(2px)'
                    },
                    animate: {
                        scale: 1,
                        opacity: 1,
                        filter: 'blur(0px)'
                    },
                    transition: {
                        duration: 0.6,
                        delay: index / 10
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$projects$2f$project$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        index: index,
                        title: project.title,
                        url: project.url,
                        role: project.role,
                        setModal: setModal
                    }, void 0, false, {
                        fileName: "[project]/app/projects/projects.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                }, project.title, false, {
                    fileName: "[project]/app/projects/projects.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)),
            breakpoint === 'desktop' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$projects$2f$project$2d$preview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                modal: modal,
                projects: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$projects$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"]
            }, void 0, false, {
                fileName: "[project]/app/projects/projects.tsx",
                lineNumber: 35,
                columnNumber: 36
            }, this)
        ]
    }, void 0, true);
}
_s(Projects, "mhQbah57XJ2QMaN3X4+eMa/ca7M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$use$2d$breakpoint$2f$dist$2f$esm$2f$useBreakpoint$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Projects;
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_projects_e50442cc._.js.map