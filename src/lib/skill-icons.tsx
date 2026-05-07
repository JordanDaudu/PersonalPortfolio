import {
    Boxes,
    Workflow,
    Database,
    LayoutGrid,
    Brain,
    Users,
    Clock3,

    Sparkles,
    Bug,
    CheckCheck,
    MessageCircle,
    Cpu,
    Code,
    Wand2,
} from "lucide-react";

export const SKILL_ICON_REGISTRY = {
    boxes: Boxes,
    workflow: Workflow,
    database: Database,
    layoutGrid: LayoutGrid,
    brain: Brain,
    users: Users,
    clock3: Clock3,

    sparkles: Sparkles,
    bug: Bug,
    checkCheck: CheckCheck,
    messageCircle: MessageCircle,
    cpu: Cpu,
    code: Code,
    wand2: Wand2,
} as const;

export type SkillIconName = keyof typeof SKILL_ICON_REGISTRY;

export type SkillIcon =
    | { kind: "image"; src: string }
    | { kind: "lucide"; name: SkillIconName }
    | null;