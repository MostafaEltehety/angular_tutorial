import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss',
})
export class DataBinding {
name:string='FED Learning';
topic='Data Binding';
image:string='https://cdn.dribbble.com/userupload/16512090/file/original-7c537045c78fee1487b82c8d039361f2.png?resize=1024x576&vertical=center';
random:string='';
onChange(event: any) {
alert('Your Country is : '+event.target.value);
}
onSave() {
alert('Data SAved Successfully');
}

}
