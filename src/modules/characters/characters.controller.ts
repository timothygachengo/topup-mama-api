import Controller from '@topup-mama/core/express/controller';
import { Request } from 'express';
import CharactersService from './characters.service';

const charactersService = new CharactersService();

class CharactersController extends Controller {
    public fetchAll = async (req: Request) => {
        try {
            const characters = await charactersService.getAllCharacters(req.query);

            if (!characters) {
                return this.badRequestResponse();
            }

            return this.successWithDataResponse(characters.data);
        } catch (e) {
            return this.serverError();
        }
    };

    public fetchById = async (req: Request) => {
        try {
            const character = await charactersService.getCharacterById(req.params.id);

            if (!character) {
                return this.notFoundResponse();
            }

            return this.successWithDataResponse(character.data);
        } catch (e) {
            return this.serverError();
        }
    };
}

export default CharactersController;
