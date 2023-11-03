import { UserDomainType } from '../store-redux/ProfilePage_reducer'

export const updateObjectInArray = (
    items: UserDomainType[],
    id: number,
    updateObj: Partial<UserDomainType>,
): UserDomainType[] => items.map(i => (i.id === id ? { ...i, ...updateObj } : i))

//Partial — это тип, который делает свойства необязательными объектами.
