import connectDB from "../utils/db.js";

// Function to create a new banner (already provided)
export const createBanner = async (req, res) => {
  const { description, timer, link } = req.body;

  try {
    const connection = await connectDB();

    const [result] = await connection.execute(
      "INSERT INTO banner (description, timer, link) VALUES (?, ?, ?)",
      [description, timer, link]
    );

    res.status(201).json({
      id: result.insertId,
      description,
      timer,
      link,
    });

    connection.end(); // Close the connection after the query is done
  } catch (error) {
    res.status(500).json({ error: "Failed to create banner content" });
  }
};

export const updateBanner = async (req, res) => {
  const { id } = req.params;
  const { description, timer, link } = req.body;

  try {
    const connection = await connectDB();

    // Step 1: Retrieve the current values from the database
    const [rows] = await connection
      .promise()
      .execute("SELECT * FROM Banner WHERE id = ?", [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "Banner not found" });
    }

    // Step 2: Merge the current values with the incoming data
    const currentBanner = rows[0];
    const updatedBanner = {
      description: description || currentBanner.description,
      timer: timer || currentBanner.timer,
      link: link || currentBanner.link,
    };

    // Step 3: Update the database with the merged values
    const [result] = await connection
      .promise()
      .execute(
        "UPDATE Banner SET description = ?, timer = ?, link = ? WHERE id = ?",
        [updatedBanner.description, updatedBanner.timer, updatedBanner.link, id]
      );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Banner not found" });
    }

    res.status(200).json({
      message: "Banner updated successfully",
      banner: updatedBanner,
      success: true,
    });

    connection.end(); // Close the connection after the query is done
  } catch (error) {
    console.error("Error during updateBanner execution:", error);
    res.status(500).json({ error: "Failed to update banner content" });
  }
};

export const getBanner = async (req, res) => {
  const { id } = req.params;

  try {
    const connection = await connectDB();

    // Execute the query and get the results
    const [rows] = await connection
      .promise()
      .execute("SELECT * FROM Banner WHERE id = ?", [id]);

    // Check if any row is returned
    if (rows.length === 0) {
      return res.status(404).json({ error: "Banner not found" });
    }

    // Send the first row as the result
    res.status(200).json(rows[0]);

    connection.end(); // Close the connection after the query is done
  } catch (error) {
    console.error("Error during getBanner execution:", error); // Log the actual error
    res.status(500).json({ error: "Failed to retrieve banner content" });
  }
};
