
const asyncHandler=(requestHanler)=>{
    return (req,res,next) => {
    try {
            return Promise.resolve(requestHanler(req, res, next))
        } catch (err) {
            return next(err)
        }
    }
}


export { asyncHandler }



// const asyncHandler = (fn) =>  async(req,res,next) => {
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code||500).json({
//             success: false,
//             message:err.message
//         })
//     }
// }