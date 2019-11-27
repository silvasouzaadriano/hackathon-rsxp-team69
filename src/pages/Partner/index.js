import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { triangle } from 'polished';
import api from '../../services/api';

import { PartnerList } from './styles';

export default function Partner({ match }) {
  const [partners, setPartners] = useState([]);

  const partnerId = useMemo(
    () => ({
      value: match.params.id,
    }),
    [match.params.id]
  );

  useEffect(() => {
    async function loadPartners() {
      const response = await api.get('partner', {
        params: { id: partnerId.value },
      });

      const data = response.data.map(partner => ({
        ...partner,
      }));

      setPartners(data);
    }

    loadPartners();
  }, [partnerId.value]);

  return (
    <PartnerList>
      {partners.map(partner => (
        <li key={partner.id}>
          <strong>{partner.name}</strong>
          {partner.subject.map(subject => (
            <>
              <span>{subject.title}</span>
              <span className="description">{subject.description}</span>
              {subject.training.map(training => (
                <>
                  <span>
                    <a href={training.url} target="blank">
                      {training.title}
                    </a>
                  </span>
                </>
              ))}
            </>
          ))}
        </li>
      ))}
    </PartnerList>
  );
}

Partner.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
