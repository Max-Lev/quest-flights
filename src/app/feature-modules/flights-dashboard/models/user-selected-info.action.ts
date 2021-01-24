import { CntrlActionEnum } from './cntrl-action.enum';
import { EmployeeResponseModel, FlightViewModel } from './employees-flights-response.model';

export class IUserSelectedInfoAction {
    cntrl: CntrlActionEnum;
    payload: EmployeeResponseModel  | FlightViewModel | FlightViewModel[];
};
