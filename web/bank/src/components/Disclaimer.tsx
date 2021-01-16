import React, { useState, useEffect } from 'react';
import { withCookies } from 'react-cookie';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
//Translation done
const Disclaimer = ({ cookies }: { cookies: any }) => {
    const [ack, setAck] = useState(true);

    useEffect(() => {
        const ack = cookies.get('selv-cookie');
        if (!ack && document) {
            const element = document.getElementById('footer') || document.getElementById('app');
            if (element) {
                element.classList.add('cookie-bar-bottom-bar');
                setAck(false);
            }
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    function dismiss () {
        cookies.set('selv-cookie', true, { path: '/' });
        if (document) {
            const element = document.getElementById('footer') || document.getElementById('app');
            if (element) {
                element.classList.remove('cookie-bar-bottom-bar');
                setAck(true);
            }
        }
    }

    const { t } = useTranslation();
    if (ack) return null;


    return (
        <div className='disclaimer-wrapper'>
            <span className='disclaimer-text'>
                {t("components.disclaimer.usesCookies")}&nbsp;
                <a
                    className='disclaimer-link'
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.iota.org/research/privacy-policy'
                >
                    {t("actions.learnMore")}
                </a>
            </span>
            <Button className='cta' onClick={dismiss}>{t("actions.dismiss")}</Button>
        </div>
    );
};

export default withCookies(Disclaimer);
