export class Location {
    _id: { 
        $oid: string;
    };
    position: {
        lng: number;
        lat: number;
    };
    address: string;
    name: string;
  }