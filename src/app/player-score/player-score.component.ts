import {Component, Input, OnInit} from '@angular/core';
import {PlayersNameService} from '../services/players-name.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-player-score',
  templateUrl: './player-score.component.html',
  styleUrls: ['./player-score.component.scss']
})
export class PlayerScoreComponent implements OnInit {
  @Input() counterX: number;
  @Input() counterO: number;
  @Input() drawCounterProps: number;
  @Input() currentPlayerProps: string;

  firstPlayer: Observable<string>;
  secondPlayer: Observable<string>;

  constructor(private playerService: PlayersNameService) {
  }

  ngOnInit(): void {
    this.firstPlayer = this.playerService.playerOneNameAsObservable;
    this.secondPlayer = this.playerService.playerTwoNameAsObservable;
  }

}
