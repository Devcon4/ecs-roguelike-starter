import { Component } from "./component";

export class BlueprintClass<T> {
    name: string;
    blueprintComponents: BlueprintComponent<T>[] = [];
    blueprintNames: string[] = [];

    constructor(blueprint?: Partial<BlueprintClass<T>>) {
        Object.assign(this, blueprint);
    }
}

type MapToBlueprintComponent<T> = { [K in keyof T]: BlueprintComponent<T[K]> };

export class BlueprintComponent<T> {
    component: T;
    values: any;

    constructor(blueprintComponent?: Partial<T>) {
        Object.assign(this, blueprintComponent);
    }
}

export class Blueprint<T extends Component[]> {
    public name: string;
    public components: MapToBlueprintComponent<T>;
    public blueprints?: string[];

    constructor(args: Partial<Blueprint<T>>) {
        Object.assign(this, args);
    }
}

// export interface Blueprint<T extends Component[]> {
//     name: string;
//     components: MapToBlueprintComponent<T>[],
//     blueprints?: string[]
// }