import {PostCreateModel} from './PostCreate';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { DeprecatedI18NPipesModule } from '@angular/common/src/common_module';

export class PostCreateWithPicture{
    postCreateModel : PostCreateModel;
    picture : any;
    constructor(inputForPost : PostCreateModel, inputPicture : any){
        this.postCreateModel = inputForPost,
        this.picture = inputPicture
    };
}
