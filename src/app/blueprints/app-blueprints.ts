import { Blueprint } from '@mesa-engine/core';

export var blueprints = [
    {
        name: "Renderable",
        components: [
            { name: "PositionComponent" },
            { name: "RenderComponent" }
        ]
    },
    {
        name: "Player",
        blueprints: ["Renderable"],
        components: [
            { name: "RenderComponent", values: {value: "@"} }
        ]
    }
]