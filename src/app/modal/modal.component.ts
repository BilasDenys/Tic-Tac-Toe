import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlayersNameService} from '../services/players-name.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() drawStatusProps: boolean;
  @Input() winnerPlayerProps: string;
  @Input() modalWindowProps: boolean;
  @Output() emitNewGame: EventEmitter<boolean> = new EventEmitter<boolean>();

  winnerX = 'X';
  winnerO = 'O';

  firstNamePlayer: Observable<string>;
  secondNamePlayer: Observable<string>;

  constructor(private playerNameService: PlayersNameService) {
  }

  ngOnInit(): void {
    this.firstNamePlayer = this.playerNameService.playerOneNameAsObservable;
    this.secondNamePlayer = this.playerNameService.playerTwoNameAsObservable;
  }

  newGame(): void {
    this.emitNewGame.emit(true);
  }

}
