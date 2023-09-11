import { Component } from '@angular/core';
import { Box } from './box.model';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})

export class TictactoeComponent {
  current_turn: string = "X";
  game_over: boolean = false;
  boxes: Box[] = []; // the game field
  status_msg : string = `Current turn: ${this.current_turn}`;
  
  // fill game field with 9 "unused" / empty boxes
  startGame() {
    for(let i = 1; i <= 9; i++) {
      this.boxes.push(new Box(i, "unused"));
    }
  }
  
  constructor() {
    this.startGame();
  }

  // is a bit hardcoded but i did not want to use sets to check for the winner and this is way more readable - project is for learning purposes only anyways
  checkForWinner(): void {
    // Win top row
    if(this.boxes[0].status === this.boxes[1].status && this.boxes[1].status === this.boxes[2].status && this.boxes[0].status !== "unused") {
      this.game_over = true;
      this.status_msg = `Game over - ${this.current_turn} won!`
      // Win mid row
    } else if(this.boxes[3].status === this.boxes[4].status && this.boxes[4].status === this.boxes[5].status && this.boxes[3].status !== "unused") {
      this.game_over = true;
      this.status_msg = `Game over - ${this.current_turn} won!`
      // Win bottom row
    } else if(this.boxes[6].status === this.boxes[7].status && this.boxes[7].status === this.boxes[8].status && this.boxes[6].status !== "unused") {
      this.game_over = true;
      this.status_msg = `Game over - ${this.current_turn} won!`
      // Win left right diagonal
    } else if(this.boxes[0].status === this.boxes[4].status && this.boxes[4].status === this.boxes[8].status && this.boxes[0].status !== "unused") {
      this.game_over = true;
      this.status_msg = `Game over - ${this.current_turn} won!`
      // Win right left diagonal
    } else if(this.boxes[2].status === this.boxes[4].status && this.boxes[4].status === this.boxes[6].status && this.boxes[2].status !== "unused") {
      this.game_over = true;
      this.status_msg = `Game over - ${this.current_turn} won!`
      // Win left col
    } else if(this.boxes[0].status === this.boxes[3].status && this.boxes[3].status === this.boxes[6].status && this.boxes[0].status !== "unused") {
      this.game_over = true;
      this.status_msg = `Game over - ${this.current_turn} won!`
      // Win mid col
    } else if(this.boxes[1].status === this.boxes[4].status && this.boxes[4].status === this.boxes[7].status && this.boxes[1].status !== "unused") {
      this.game_over = true;
      this.status_msg = `Game over - ${this.current_turn} won!`
      // Win right col
    } else if(this.boxes[2].status === this.boxes[5].status && this.boxes[5].status === this.boxes[8].status && this.boxes[2].status !== "unused") {
      this.game_over = true;
      this.status_msg = `Game over - ${this.current_turn} won!`
    }
  }

  buttonClick(event: Event): void {
    if(!this.game_over) {
      // Get sender element
      let sender = event.target as HTMLElement;
      let senderID = sender.id;
  
      
      var field_status = this.boxes[Number(senderID) - 1].status;
      
      if(field_status === "unused") {
        sender.innerText = this.current_turn;
        this.boxes[Number(senderID) - 1].status = this.current_turn;
        this.checkForWinner();
        // re-check because checkforwinner does not return anything and code below would run even if checkforwinner finds a winner
        if(!this.game_over) {
          if(this.current_turn === "X") {
            this.current_turn = "O";
            this.status_msg = `Current turn: ${this.current_turn}`;
          } else {
            this.current_turn = "X";
            this.status_msg = `Current turn: ${this.current_turn}`;
          }
        }   
      } 
    }
  }
}
