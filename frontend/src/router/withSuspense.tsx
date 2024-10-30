import React, { Suspense, ComponentType } from 'react';
import Loading from "@/components/Loading";

const withSuspense = <P extends object>(
    WrappedComponent: ComponentType<P>
) => {
    const SuspenseComponent: React.FC<P> = (props) => (
        <Suspense fallback={<Loading />}>
            <WrappedComponent {...props} />
        </Suspense>
    );

    return SuspenseComponent;
};

export default withSuspense;
