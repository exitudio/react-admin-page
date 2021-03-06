import React from 'react'
import { connect } from 'react-redux'
import * as LoadProductsAction from '../redux/loadProducts/LoadProductsAction'
import Item from './item/Item.jsx'
import './Table.scss'
import TableHead from './tableHead/TableHead.jsx'


class Table extends React.Component {
    render() {
        switch (this.props.loadStatus) {
            case LoadProductsAction.GET_PRODUCTS_REQUEST:
                return <div>
                    <table className="table">
                        <TableHead />
                    </table>
                    <div>Loading...</div>
                </div>
            case LoadProductsAction.GET_PRODUCTS_FAIL:
                return <div>
                    <table className="table">
                        <TableHead />
                    </table>
                    <div>Load Fail Please Try Again Later!!!</div>
                </div>
            default:
                return <table className="table">
                    <TableHead />
                    {
                        this.props.displayProducts.map((product, i) => {
                            return <Item
                                product={product}
                                key={i}
                            />
                        })
                    }
                </table>
        }
    }
}

const mapStateToProps = state => {
    return {
        loadStatus: state.loadProductsReducer.loadStatus,
        displayProducts: state.listProductsReducer.displayProducts,
    }
}
export default connect(mapStateToProps)(Table)