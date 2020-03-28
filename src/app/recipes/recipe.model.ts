export class Recipe {
    public id: number;
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: string;

    constructor(id: number, name: string, desc: string, imagePath: string, ingredients: string){
        this.id =id;
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.ingredients=ingredients;
    }
}