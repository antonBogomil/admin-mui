import React from 'react';
import {ListBody, ListHead} from "./List.components";
import {useFetch} from "../../../hook/useFetch";
import Table from "@material-ui/core/Table";

const ListDefault = ({config}) => {
    const [data, loading, error] = useFetch(config.dataUrl, {});
    return (
        <>
            <Table>
                <ListHead fields={config.fields}/>
                <ListBody fields={config.fields} items={data}/>
            </Table>
        </>
    );
};

export default ListDefault;