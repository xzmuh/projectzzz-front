import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(){
    
  }

  ngOnInit(): void {
    this.getWidthWindow();
  }

  openMenu(){
    const navegacao = (document.querySelector(".menu-lateral") as HTMLLIElement )
    navegacao.classList.toggle("openMenu")
  }

  getWidthWindow(){
    const widthWindow = screen.width;
    const navegacao = (document.querySelector(".menu-lateral") as HTMLLIElement )
    if (widthWindow > 500){
      navegacao.classList.add("openMenu")
    }
  }

}