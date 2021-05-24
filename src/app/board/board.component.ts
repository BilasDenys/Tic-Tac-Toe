import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  squares: string[];
  winnerStatus;
  winnerPlayer;
  player;
  drawStatus: boolean;
  pastPosition: number[];
  counterX;
  counterO;
  winCombString: string;
  modalWindow: boolean;
  drawCount: number;
  formStatus: boolean;

  constructor() {
    this.squares = [];
    this.counterX = 0;
    this.counterO = 0;
    this.drawCount = 0;

  }

  ngOnInit(): void {
    this.formStatus = true;
    this.newGame();
  }

  newGame(): void {
    this.squares = new Array(9).fill(null);
    this.winnerStatus = false;
    this.winnerPlayer = null;
    this.player = true;
    this.drawStatus = false;
    this.pastPosition = [];
    this.modalWindow = false;
    this.winCombString = null;
  }

  get currentPlayer(): string {
    return this.player ? 'X' : 'O';
  }

  togglePlayerValue(): void {
    this.player = !this.player;
  }

  makeMove(position: number): any {
    if (!this.winnerStatus && !this.squares[position]) {
      this.pastPositionFunc(position);
      this.squares.splice(position, 1, this.currentPlayer);
      this.togglePlayerValue();
    }
    if (this.winnerCombinationFunc()) {
      this.togglePlayerValue();
      this.modalWindow = true;
      this.currentPlayer === 'X' ? this.counterX++ : this.counterO++;
      this.winnerPlayer = this.currentPlayer;
    }
    if (this.pastPosition.length === 9 && !this.winnerStatus) {
      this.modalWindow = true;
      this.drawStatus = true;
      this.drawCount++;
    }
  }

  winnerCombinationFunc(): boolean {
    const winnerCombinationLines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (const line of winnerCombinationLines) {
      if (
        this.squares[line[0]] &&
        this.squares[line[0]] === this.squares[line[1]] &&
        this.squares[line[1]] === this.squares[line[2]]
      ) {
        this.winnerStatus = true;
        this.winnerPlayerData(line.join(''));
        return true;
      }
    }
    return false;
  }

  pastPositionFunc(position: number): void {
    this.pastPosition.push(position);
  }

  winnerPlayerData(line): string {
    switch (line) {
      case '012':
        return this.winCombString = 'one';
      case '345':
        return this.winCombString = 'two';
      case '678':
        return this.winCombString = 'three';
      case '036':
        return this.winCombString = 'four';
      case '147':
        return this.winCombString = 'five';
      case '258':
        return this.winCombString = 'six';
      case '048':
        return this.winCombString = 'seven';
      case '246':
        return this.winCombString = 'eight';
      default:
        return line;
    }

  }

  formStatusHandler(): void {
    this.formStatus = !this.formStatus;
  }

}
