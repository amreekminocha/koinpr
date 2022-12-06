import { actionType } from "./type"

export const showIndividualMarketplaceData=(payload)=>{
    return{
        type:actionType.SHOW_DETAILS_OF_INDIVIDUAL_MARKETPLACE,
        payload:payload
    }
}