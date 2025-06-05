

/*
Middleware to validate movie data before creating a new movie entry. It checks that:

- All required fields are present and not empty.
- The `year` field is a valid 4-digit number.

- If any required fields are missing or empty, it responds with a 400 error and a message indicating that all fields are required.
- If the `year` field is not in a valid format, it responds with a 400 error and a specific message.
- If all data is valid, it proceeds to the next middleware or controller.

This middleware is exported for use in the appropriate route handlers.
*/

function validateMovieData (req, res, next) {

  const { title, year, director, duration, genre, rate, poster } = req.body;

  const requiredFields = [title, year, director, duration, genre, rate, poster];

  if (!requiredFields.every (field => field !== undefined && field !== null && field !== '')) {

    return res.status (400).json ({

      error: "All fields (title, year, director, duration, genre, rate, poster) are required and must not be empty.",

    });
  }

  if (!/^\d{4}$/.test (String (year))) {

    return res.status (400).json ({

      error: "The 'year' field must be a 4-digit number (e.g., 1995).",

    });
  }

  next ();

}

module.exports = validateMovieData;
