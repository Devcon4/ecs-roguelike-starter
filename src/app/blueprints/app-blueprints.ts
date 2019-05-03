import { Blueprint } from "../../ecs";

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