import React from 'react';

export default function createDefaultPlaceholder(WrappedComponent,title,description,showPlaceholder=true) {
	return class CreateDefaultPlaceholder extends React.Component {
		render() {
			return <WrappedComponent 
								{...this.props}
								title={title} 
								description={description}
								showPlaceholder={showPlaceholder} />
		}
	}
}