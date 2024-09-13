import { Routes } from '@angular/router';
import { EmpMgrComponent } from './Components/emp-mgr/emp-mgr.component';
import { EmpAddComponent } from './Components/emp-add/emp-add.component';
import { EmpViewComponent } from './Components/emp-view/emp-view.component';
import { EmpEditComponent } from './Components/emp-edit/emp-edit.component';
import { FileNotFoundComponent } from './Components/file-not-found/file-not-found.component';
import { TemplateFormComponent } from './Components/template-form/template-form.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { EmpStateComponent } from './Components/emp-state/emp-state.component';

export const routes: Routes = [
    {path: '', component : EmpMgrComponent},
    {path: "addEmp", component: EmpAddComponent},
    {path : "view/:id", component: EmpViewComponent},
    {path : "edit/:id", component: EmpEditComponent},
    {path : "template", component : TemplateFormComponent},
    {path : "reactive", component : ReactiveFormComponent},
    {path : "empState", component : EmpStateComponent},
    { path : "**" , component : FileNotFoundComponent}
];
