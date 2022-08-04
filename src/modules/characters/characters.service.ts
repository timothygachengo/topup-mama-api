import IceAndFireApi from '@topup-mama/services/IceAndFireApi';
import axios from '@topup-mama/utils/axios';
import { ErrorUseCase, ICharacterFilter, UseCaseStatusCode } from '@topup-mama/types';
import CharactersRepository from './characters.repository';

class CharactersService {
    private _repository: CharactersRepository;
    private _iceAndFireApi: IceAndFireApi;

    constructor() {
        this._repository = new CharactersRepository();
        this._iceAndFireApi = new IceAndFireApi(axios);
    }

    public getAllCharacters = async (filter?: ICharacterFilter) => {
        const characters = await this._iceAndFireApi.getCharacters(filter);

        if (!characters) {
            return ErrorUseCase;
        }

        return {
            status: UseCaseStatusCode.SUCCESS,
            data: characters
        };
    };

    public getCharacterById = async (id: string) => {
        const character = await this._iceAndFireApi.getCharacterById(id);

        if (!character) return ErrorUseCase;

        return {
            status: UseCaseStatusCode.SUCCESS,
            data: character
        };
    };
}

export default CharactersService;
