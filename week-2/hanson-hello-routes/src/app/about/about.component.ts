/*
=====================================
  ; Title: about.component.ts
  ; Author: Drew Hanson
  ; Date: July 20 2019
  ; Modified By: Drew Hanson
  ; Description: about.component.ts
======================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template:
  <br/>
  <div class="content">
    <h1 class="text-cetnter">About Us</h1>
    <div class="text-left form">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat vel sapien rhoncus ullamcorper.
      Duis tincidunt ex at felis viverra auctor. Ut placerat rutrum blandit. Integer congue tincidunt lectus id
      hendrerit. Nunc a massa non velit venenatis tincidunt sit amet placerat metus. Phasellus dignissim accumsan
      gravida. Quisque semper ex id lacus faucibus, et sodales lectus ullamcorper. Pellentesque sit amet pulvinar
        metus. Donec ex erat, tincidunt eu facilisis eu, dignissim nec nibh.</p>
      <p>Etiam eget lacinia ex, ac bibendum purus. Integer semper, mi eget ornare cursus, enim nisi aliquam sem, sed
      varius felis dolor tempor neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
      elementum rutrum dolor ut accumsan. Duis dictum nibh ac risus dictum, ut varius nibh lacinia. Vestibulum
      sed sollicitudin urna, quis efficitur sapien. Vivamus eget suscipit lacus. In orci nulla, lobortis a tortor
        eu, feugiat mattis arcu. Curabitur ac mauris sapien. Etiam aliquet tempor egestas. Etiam at sapien ex.</p>

      <p>Maecenas efficitur ante nunc, non sollicitudin ligula tincidunt vitae. Integer efficitur eleifend orci,
      eu feugiat arcu interdum eget. Praesent placerat, felis quis porta dignissim, sapien lacus maximus velit,
      quis varius lectus libero vel justo. Quisque congue in tortor vel bibendum. Ut commodo et felis nec hendrerit
      . Donec faucibus augue eu accumsan viverra. Morbi eget neque ut urna vulputate rutrum. Aliquam id tincidunt
        nisi. Pellentesque mattis mollis sapien a sollicitudin. Vivamus varius lacus nisi, ut pellentesque metus
        luctus nec. Suspendisse quis imperdiet quam. Suspendisse ac metus quis augue tristique lacinia.</p>

      <p>Nam viverra tempor egestas. Sed tincidunt facilisis nulla in blandit. Etiam id felis quis turpis volutpat
      ornare. Vestibulum tincidunt erat at aliquet aliquet. Nunc venenatis gravida massa eu feugiat. Maecenas
      ornare a lorem et venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Nunc convallis, augue quis venenatis aliquam, nulla mi placerat tellus, quis aliquam tellus nulla
        quis lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas
          iaculis tortor pharetra, placerat odio in, ultrices sapien. In at purus a nunc semper accumsan. Ut bibendum
          risus sit amet dui tincidunt, et sagittis risus convallis.</p>

      <p>Fusce tincidunt, velit at varius venenatis, tellus massa blandit felis, in consectetur diam leo vel metus.
      Mauris pellentesque purus sed tristique lacinia. Vivamus lobortis feugiat erat, id pretium ex feugiat non.
      Donec nec molestie eros. Proin eget venenatis nulla. Nullam pharetra euismod elit, eu fringilla orci ultrices
        quis. Pellentesque efficitur magna neque, non suscipit lectus suscipit quis. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Etiam massa dolor, porttitor ac consequat
        a, fringilla tincidunt magna. Duis sagittis sapien nibh, sodales fringilla justo ullamcorper sed. Integer
        varius, libero vel euismod volutpat, nunc felis congue enim, quis cursus ante risus et erat. In ornare
        ultricies erat facilisis luctus.</p>
    </div>
  </div>
  ,
  styles: [
  .content{
    background-color: #8533ff;
    border-radius: 10px;
    color: white;
  }
  p{
    text-indent:25px;
    font-weight:200;
  }
  .form{
    padding-left:20px;
    padding-right:15px;
    padding-bottom:20px;
  }
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
