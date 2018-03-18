import React from "react";
import PropTypes from "prop-types";

/**
 * A public higher-order component to access the schema stored in context.
 * Use with your custom components to have access to parts of the schema.
 */
const withAwards = Component => {
    const Wrapper = (props, context) => {
        const { schema } = context;
        
        return <Component {...props} awards={schema.awards}/>;
    };
    
    Wrapper.displayName = `withAwards(${Component.displayName || Component.name})`;
    
    Wrapper.contextTypes = {
        schema: PropTypes.shape({}).isRequired
    };
    
    return Wrapper;
};

export default withAwards;