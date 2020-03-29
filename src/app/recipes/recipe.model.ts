export class Recipe {
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: string;

    constructor(name: string, desc: string, imagePath: string, ingredients: string, id?: number){
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.ingredients=ingredients;
        this.id =id;
    }
}