import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlayersNameService} from '../services/players-name.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() formsStatus: boolean;
  @Output() emitFormStatusProps: EventEmitter<boolean> = new EventEmitter<boolean>();

  playerOneName;
  playerTwoName;

  constructor(private setPlayerName: PlayersNameService) {
  }

  ngOnInit(): void {
    console.log(this.formsStatus);

  }

  SubmitHandler(): void {
    if (this.playerOneName.trim().lenght !== 0 && this.playerTwoName.trim().length !== 0) {
      this.setPlayerName.setPlayerOneName(this.playerOneName);
      this.setPlayerName.setPlayerTwoName(this.playerTwoName);
      this.emitFormStatusProps.emit(false);
    }
  }
}
