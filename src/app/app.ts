import { appSystems } from "./app-systems";
import { Engine, Entity } from "../ecs";
import { PositionComponent, RenderComponent } from './components';
import { blueprints, BlueprintType } from "./blueprints";

export class App {
    componets = [
        PositionComponent,
        RenderComponent
    ];

    engine = new Engine(this.componets, BlueprintType);

    constructor() {
        this.engine.addBlueprint({
            name: 'Renderable',
            components: [
                {component: PositionComponent, values: {}},
                {component: RenderComponent, values: null}
            ],
            blueprints: []
        });
        this.engine.addBlueprint({
            name: 'Player',
            blueprints: ['renderable'],
            components: [
                {component: RenderComponent, values: {value: "@"}}
            ]
        });

        this.engine.start();
        this.engine.addSystems(...appSystems);

        let entity = new Entity();
        entity.putComponent(PositionComponent);
        this.engine.addEntity(entity);
        this.engine.update(0);
        this.engine.update(0);
        this.engine.update(0);
    }
}