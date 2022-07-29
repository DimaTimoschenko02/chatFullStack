import { NextFunction , Request , Response} from 'express'
import { AnySchema} from 'yup'
import ApiError from '../exeptions/api.error'

const validateSchema = (schema:AnySchema) => async(req:Request , res: Response, next: NextFunction) =>{
    try {
        await schema.validate({
            body:req.body,
            params:req.params,
            query:req.query
        })
        return next()
    } catch (err) {
        return next(new ApiError( 400 , err.message))
    }
}
export default validateSchema