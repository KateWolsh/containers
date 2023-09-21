import { Character, Team } from "../team";

describe('Team', () => {
    let team;
    let character1, character2, character3;

    beforeEach(() => {
        team = new Team();
        character1 = new Character('Alice');
        character2 = new Character('Bob');
        character3 = new Character('Alice');  
    });

    it('should add a character to the team', () => {
        team.add(character1);
        expect(team.toArray()).toEqual([character1]);
    });

    it('should not allow duplicate characters using add', () => {
        team.add(character1);
        expect(() => team.add(character1)).toThrow('Character already exists in the team.');
    });

    it('should not allow duplicate characters using add', () => {
        team.add(character1);
        expect(() => team.add(character1)).toThrowError('Character already exists in the team.');
    });
    
});
