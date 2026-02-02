import { Component } from '@angular/core';

// Define what a single player should look like
interface Player {
  Name: string;
  Nick_Name: string;
  Seasons_Played: number;
  NBA_Championships: number;
  MVPs: number;
  All_NBA: number;
  ALL_NBA_Defense: number;
  All_Star: number;
  IsActive: boolean;
}

@Component({
  selector: 'app-playertable',
  imports: [],
  templateUrl: './playertable.html',
  styleUrl: './playertable.scss',
})
export class Playertable {
  players: Player[] = [
    {
      Name: 'Michael Jordan',
      Nick_Name: 'His Airness',
      Seasons_Played: 15,
      NBA_Championships: 6,
      MVPs: 5,
      All_NBA: 11,
      ALL_NBA_Defense: 9,
      All_Star: 14,
      IsActive: false,
    },
    {
      Name: 'Shaquille Oneal',
      Nick_Name: 'The Diesel',
      Seasons_Played: 19,
      NBA_Championships: 4,
      MVPs: 1,
      All_NBA: 14,
      ALL_NBA_Defense: 3,
      All_Star: 15,
      IsActive: false,
    },
    {
      Name: 'Kobe Bryant',
      Nick_Name: 'Black Mamba',
      Seasons_Played: 20,
      NBA_Championships: 5,
      MVPs: 1,
      All_NBA: 15,
      ALL_NBA_Defense: 12,
      All_Star: 18,
      IsActive: false,
    },
    {
      Name: 'LeBron James',
      Nick_Name: 'King James',
      Seasons_Played: 22,
      NBA_Championships: 4,
      MVPs: 4,
      All_NBA: 20,
      ALL_NBA_Defense: 6,
      All_Star: 22,
      IsActive: true,
    },
    {
      Name: 'Steph Curry',
      Nick_Name: 'Chef Curry',
      Seasons_Played: 17,
      NBA_Championships: 4,
      MVPs: 2,
      All_NBA: 11,
      ALL_NBA_Defense: 0,
      All_Star: 11,
      IsActive: true,
    },
    {
      Name: 'Tim Duncan',
      Nick_Name: 'The Big Fundamental',
      Seasons_Played: 19,
      NBA_Championships: 5,
      MVPs: 2,
      All_NBA: 15,
      ALL_NBA_Defense: 15,
      All_Star: 15,
      IsActive: false,
    },
    {
      Name: 'Magic Johnson',
      Nick_Name: 'Magic',
      Seasons_Played: 13,
      NBA_Championships: 5,
      MVPs: 3,
      All_NBA: 10,
      ALL_NBA_Defense: 0,
      All_Star: 12,
      IsActive: false,
    },
    {
      Name: 'Larry Bird',
      Nick_Name: 'Larry Legend',
      Seasons_Played: 13,
      NBA_Championships: 3,
      MVPs: 3,
      All_NBA: 10,
      ALL_NBA_Defense: 3,
      All_Star: 12,
      IsActive: false,
    },
    {
      Name: 'Kevin Durant',
      Nick_Name: 'Slim Reaper',
      Seasons_Played: 18,
      NBA_Championships: 2,
      MVPs: 1,
      All_NBA: 11,
      ALL_NBA_Defense: 0,
      All_Star: 15,
      IsActive: true,
    },
    {
      Name: 'Giannis Antetokounmpo',
      Nick_Name: 'Greek Freak',
      Seasons_Played: 13,
      NBA_Championships: 1,
      MVPs: 2,
      All_NBA: 9,
      ALL_NBA_Defense: 5,
      All_Star: 10,
      IsActive: true,
    },
    {
      Name: 'Nikola Jokic',
      Nick_Name: 'Joker',
      Seasons_Played: 11,
      NBA_Championships: 1,
      MVPs: 3,
      All_NBA: 7,
      ALL_NBA_Defense: 0,
      All_Star: 8,
      IsActive: true,
    },
  ];
}
