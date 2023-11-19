import * as Yup from 'yup'

const StepFiveMoneySchema = Yup.object().shape({
    money: Yup
        .number()
        .required("יש למלא שדה זה"),
    bank_accounts: Yup.array()
        .of(
            Yup.object()
                .shape({
                    bank_name: Yup.string().required("יש להזין שם בנק"),
                    account_number: Yup.string()
                        .required("יש להזין מספר חשבון")
                        .min(1, "מספר החשבון לא תקין")
                        .max(9, "מספר החשבון לא תקין"),
                    branch_number: Yup.string()
                        .required("יש להזין מספר סניף")
                        .min(3, "מספר הסניף לא תקין")
                        .max(3, "מספר הסניף לא תקין")
                })),
    provident_funds_data: Yup.array()
        .of(
            Yup.object()
                .shape({
                    fund_name: Yup.string().required("יש להזין שם קופה"),
                    fund_number: Yup.string().required("יש להזין מספר קופה")
                })
        ),
    study_funds_data: Yup.array()
        .of(
            Yup.object()
                .shape({
                    fund_name: Yup.string().required("יש להזין שם קרן"),
                    fund_number: Yup.string().required("יש להזין מספר קרן")
                })
        ),
})

export default StepFiveMoneySchema