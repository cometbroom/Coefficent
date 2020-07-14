import { Photo } from "./photo";

export interface User {
	id:			number;
	username: 	string;
	created: 	Date;
	bio: 		string;
	interests: 	string;
	photos: 	Photo[];
}
