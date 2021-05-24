import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersNameService {

  private playerNameOne: BehaviorSubject<string> = new BehaviorSubject<string>('Player 1');
  private playerNameTwo: BehaviorSubject<string> = new BehaviorSubject<string>('Player 2');


  public playerOneNameAsObservable = this.playerNameOne.asObservable();
  public playerTwoNameAsObservable = this.playerNameTwo.asObservable();

  constructor() {
  }

  setPlayerOneName(name: string): void {
    this.playerNameOne.next(name);
  }

  setPlayerTwoName(name: string): void {
    this.playerNameTwo.next(name);
  }
}
