import React from 'react'
import DocPage from '../DocPage'
import Title from '../Title'
import translation from '../../../store/translation'
import Subtitle from "../Subtitle"
import QuestionBlock from "../QuestionBlock"
import data from "../../../store/sampleData"
import Table from "../Table"
import RowHeader from "../RowHeader"
import TableRow from '../TableRow'
import TableHeader from "../TableHeader"
import TableCell from "../TableCell"
import Block from "../Block"
import BlockInfo from "../BlockInfo"
import Divider from "../Divider"
import { StyleSheet, Text, View } from '@react-pdf/renderer'

const style = StyleSheet.create({
    money: {
        flexDirection: "row",
        textAlign: "right"
    }
})

function Step5() {
    return (
        <DocPage>
            <Title>{translation.step5}</Title>
            <Text style={style.money}>
                <Text>{translation.money_ils}</Text>&nbsp;
                <QuestionBlock question={translation.money} answer={data.money} />
            </Text>

            <Subtitle>{translation.bank_accounts_title}</Subtitle>
            {data.bank_accounts.map(account =>
                <Table>
                    <RowHeader>
                        <TableHeader>{translation.bank_accounts.bank_name}</TableHeader>
                        <TableHeader>{translation.bank_accounts.account_number}</TableHeader>
                        <TableHeader>{translation.bank_accounts.branch_number}</TableHeader>
                    </RowHeader>
                    <TableRow>
                        <TableCell>{account.bank_name}</TableCell>
                        <TableCell>{account.account_number}</TableCell>
                        <TableCell>{account.branch_number}</TableCell>
                    </TableRow>
                </Table>
            )}

            <Divider />
            <QuestionBlock question={translation.provident_fund} answer={data.provident_fund} />
            {data.provident_fund_data.map((fund, index) =>
                <Block>
                    <BlockInfo>{`${translation.provident_fund_title} ${data.provident_fund_data.length}/${index + 1}`}</BlockInfo>
                    <QuestionBlock question={translation.provident_fund_data.fund_name} answer={fund.fund_name} />
                    <QuestionBlock question={translation.provident_fund_data.fund_number} answer={fund.fund_number} />
                </Block>
            )}

            <QuestionBlock question={translation.study_fund} answer={data.study_fund} />
            {data.study_fund_data.map((fund, index) =>
                <Block>
                    <BlockInfo>{`${translation.study_fund_title} ${data.study_fund_data.length}/${index + 1}`}</BlockInfo>
                    <QuestionBlock question={translation.study_fund_data.fund_name} answer={fund.fund_name} />
                    <QuestionBlock question={translation.study_fund_data.fund_number} answer={fund.fund_number} />
                </Block>
            )}

            <Divider />
            <QuestionBlock question={translation.non_profit_provision} answer={data.non_profit_provision} />
            {data.non_profit_provision_data.map((nonprofit, index) =>
                <Block>
                    <BlockInfo>{`${translation.non_profit_provision_title} ${data.non_profit_provision_data.length}/${index + 1}`}</BlockInfo>
                    <QuestionBlock question={translation.non_profit_provision_data.non_profit_name} answer={nonprofit.non_profit_name} />
                    <QuestionBlock question={translation.non_profit_provision_data.non_profit_provision_percentage} answer={nonprofit.non_profit_provision_percentage} />
                    <QuestionBlock question={translation.non_profit_provision_data.non_profit_message} answer={nonprofit.non_profit_message} />
                    <QuestionBlock question={translation.non_profit_provision_data.non_profit_message_content} answer={nonprofit.non_profit_message_content} />
                </Block>
            )}

            <Divider />
            <View wrap={false}>
                <QuestionBlock question={translation.money_division} answer={data.money_division} />
                {data.money_division_inheritors.map((inheritor) =>
                    <Table>
                        <RowHeader>
                            <TableHeader>{translation.money_division_inheritors.first_name}</TableHeader>
                            <TableHeader>{translation.money_division_inheritors.last_name}</TableHeader>
                            <TableHeader>{translation.money_division_inheritors.person_id}</TableHeader>
                            <TableHeader>{translation.money_division_inheritors.percentage}</TableHeader>
                        </RowHeader>
                        <TableRow>
                            <TableCell>{inheritor.first_name}</TableCell>
                            <TableCell>{inheritor.last_name}</TableCell>
                            <TableCell>{inheritor.person_id}</TableCell>
                            <TableCell>{inheritor.percentage}</TableCell>
                        </TableRow>
                    </Table>
                )}
            </View>

        </DocPage>
    )
}

export default Step5